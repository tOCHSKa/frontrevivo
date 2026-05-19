<template>
  <div class="min-h-screen flex items-center justify-center px-6">

    <!-- Card -->
    <div class="w-full max-w-md bg-white backdrop-blur-xl  border-border rounded-2xl p-8 shadow-2xl">

      <!-- Logo -->
      <div class="flex flex-col items-center mb-8">
        <div class="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
          <div class="w-6 h-6 rounded-full bg-primary" />
        </div>

        <h1 class="text-2xl font-bold text-black">
          {{t('login.title')}}
        </h1>

        <p class="text-md text-gray-600 mt-2">
          {{t('login.subtitle')}}
        </p>
      </div>

      <!-- Google button -->
      <button
        class="w-full flex items-center justify-center gap-3
        border border-slate-200 rounded-xl py-3 text-md font-medium
        text-[#334155] hover:scale-105 transition cursor-pointer duration-300"
      >
        <svg class="w-5 h-5" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.6l6.9-6.9C36.64 2.7 30.7 0 24 0 14.62 0 6.44 5.48 2.56 13.44l8.06 6.26C12.5 13.2 17.8 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.5 24.5c0-1.6-.15-3.1-.44-4.5H24v9h12.7c-.6 3.2-2.4 5.9-5.1 7.7l7.9 6.1C43.9 38 46.5 31.8 46.5 24.5z"/>
          <path fill="#FBBC05" d="M10.6 28.7c-1-2.9-1-6.1 0-9L2.56 13.44C-.85 20.1-.85 27.9 2.56 34.56l8.04-5.86z"/>
          <path fill="#34A853" d="M24 48c6.7 0 12.64-2.2 16.9-6l-7.9-6.1c-2.2 1.5-5 2.4-9 2.4-6.2 0-11.5-3.7-13.4-9.2L2.56 34.56C6.44 42.52 14.62 48 24 48z"/>
        </svg>

        {{t('login.google')}}
      </button>

      <!-- Divider -->
      <div class="flex items-center gap-4 my-6">
        <div class="h-px bg-border flex-1" />
        <span class="text-xs text-muted-foreground uppercase">{{t('login.or')}}</span>
        <div class="h-px bg-border flex-1" />
      </div>

      <!-- Email -->
      <div class="space-y-4">

        <div>
          <label class="text-sm text-[#334155]">{{ t('login.label.email') }}</label>
          <div class="mt-1 flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-3 bg-slate-100">
            <svg class="w-4 h-4 text-[#334155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-width="2" d="M4 4h16v16H4z"/>
              <path stroke-width="2" d="M4 6l8 6 8-6"/>
            </svg>
            <input
              type="email"
              placeholder="you@example.com"
              class="bg-transparent w-full outline-none text-sm text-[#334155]"
            />
          </div>
        </div>

        <!-- Password -->
  <div>
    <label class="text-sm text-[#334155]">
      {{ t('login.label.password') }}
    </label>

    <div
      class="mt-1 flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-3 bg-slate-100"
    >
      <!-- Lock icon -->
      <svg
        class="w-4 h-4 text-[#334155]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-width="2"
          d="M12 11c-2 0-4 2-4 4v4h8v-4c0-2-2-4-4-4z"
        />
        <path
          stroke-width="2"
          d="M8 11V8a4 4 0 118 0v3"
        />
      </svg>

      <!-- Input -->
      <input
        :type="showPassword ? 'text' : 'password'"
        placeholder="••••••••"
        class="bg-transparent w-full outline-none text-sm text-[#334155]"
      />

      <!-- Eye button -->
      <button
        type="button"
        @click="showPassword = !showPassword"
        class="text-[#334155] hover:opacity-70 transition"
      >
        <!-- Eye -->
        <svg
          v-if="!showPassword"
          class="w-5 h-5 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke-width="2"
          />
        </svg>

        <!-- Eye off -->
        <svg
          v-else
          class="w-5 h-5 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3l18 18"
          />
          <path
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.58 10.58a2 2 0 002.83 2.83"
          />
          <path
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.88 5.09A9.77 9.77 0 0112 5c7 0 11 7 11 7a21.77 21.77 0 01-5.17 5.94"
          />
          <path
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.1 6.1A21.84 21.84 0 001 12s4 7 11 7a10.94 10.94 0 005.11-1.27"
          />
        </svg>
      </button>
    </div>
  </div>


        <!-- Button -->
        <button
          class="w-full mt-2 bg-black text-white font-medium py-3 rounded-xl hover:scale-105 transition cursor-pointer duration-300"
        >
          {{t('login.button')}}
        </button>
      </div>

      <!-- Footer -->
      <div class="flex justify-between text-xs text-muted-foreground mt-6">
        <a href="#" class="hover:text-foreground transition">
          {{t('login.forgotPassword')}}
        </a>
        <RouterLink to="/register" class="hover:text-foreground transition">
          {{t('login.needAccount')}} <span class="text-primary">{{t('login.signUp')}}</span>
        </RouterLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const showPassword = ref(false)
const { t } = useI18n()

</script>