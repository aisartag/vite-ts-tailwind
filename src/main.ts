/* import './style.css'
import typescriptLogo from './typescript.svg' */
import './tailwind.css'
import { setupCounter } from './counter'
import { darkToggler } from './theme'

 document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <div class="m-6 flex justify-center">

        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg"
            class="h-32 p-6 will-change-[filter] transition-[filter] duration-300  hover:drop-shadow-[0_0_35px_rgba(100,108,255,0.67)]"
            alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank">
          <img src="/src/typescript.svg"
            class="h-32 p-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_35px_rgba(49,120,198,0.67)]"
            alt="JavaScript logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src="/tailwindcss-icon.svg"
            class="h-32 p-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_35px_rgba(49,120,198,0.67)]"
            alt="Tailwind logo" />
        </a>
      </div>

      <h1 class="font-semibold text-5xl text-slate-700 dark:text-slate-200">Hello Vite TS Tailwind!</h1>
      <div class="p-8">
        <button id="counter" type="button"
          class="border border-transparent rounded-lg py-4 px-8 transition-[border-color] duration-[250ms] hover:border-[#646cff] text-slate-700 dark:text-slate-200"></button>
      </div>
      <p class="dark:text-[#888888]">
        Click on the Vite logo to learn more
      </p>
    </div>

  </div>

` 

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
darkToggler()
