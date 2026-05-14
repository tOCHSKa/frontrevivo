// Base URL selon l'environnement
const baseURL = process.env.VUE_APP_API_URL

// ---- LOGIN ----
export const test = async () => {
  const response = await fetch(`${baseURL}/health`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || 'Erreur lors du test')
    
  }

  return await response.json()
}

// ---- LOGIN ----
export const login = async ({ email, password }) => {
  const response = await fetch(`${baseURL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Erreur lors du login');
  }

  return await response.json();
};

export const register = async (email, password) => {
  try {
    const response = await fetch(`${baseURL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    // Essaye de parser la réponse JSON, même si le corps est vide
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || 'Erreur lors de l’inscription.');
    }

    return data;
  } catch (err) {
    // Gestion des erreurs réseau (serveur hors ligne, CORS, etc.)
    throw new Error(err.message || 'Erreur réseau');
  }
};

export const me = async () => {
  const token = localStorage.getItem('token')

  const response = await fetch(`${baseURL}/api/auth/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Erreur utilisateur');
  }

  return data;
};

export const upload = async (file) => {
  const sessionId = localStorage.getItem('sessionId')
  const token = localStorage.getItem('token')

  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch(`${baseURL}/api/upload`, {
    method: 'POST',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(sessionId && { 'x-session-id': sessionId }), // 👈 important
    },
    body: formData,
  })

  const data = await response.json()

  // 🔥 stocker sessionId renvoyé
  if (data.sessionId) {
    localStorage.setItem('sessionId', data.sessionId)
  }

  return data
}

export default { login, register, me, upload }