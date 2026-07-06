// Code snippets for developer code-typing practice
export const codeSnippets = {
  javascript: [
    "const calculateWpm = (keys, time) => (keys / 5) / (time / 60);",
    "import { defineConfig } from 'astro/config'; import tailwind from '@tailwindcss/vite';",
    "export default defineConfig({ vite: { plugins: [tailwind()] } });",
    "const [wpm, setWpm] = useState(0); useEffect(() => { alert(wpm); }, [wpm]);",
    "document.addEventListener('toggle-keyboard', () => { el.classList.toggle('hidden'); });",
    "const data = await fetch('/api/stats').then(res => res.json()).catch(err => console.error(err));"
  ],
  python: [
    "def calculate_wpm(keys, seconds): return (keys / 5.0) / (seconds / 60.0)",
    "class TypingSession: def __init__(self, mode='time'): self.mode = mode; self.wpm = 0",
    "import random; words = ['vercel', 'astro', 'tailwind']; random.shuffle(words)",
    "for i in range(10): print(f'wpm index: {i} - score: {random.randint(50, 100)}')",
    "with open('stats.json', 'r') as f: data = json.load(f); print(data['best_speed'])",
    "try: result = run_typing_test() except Exception as e: log_error(e)"
  ],
  html: [
    "<div class='mesh-container'><span class='typing-caret'></span></div>",
    "<button id='reset-btn' class='bg-primary text-on-primary rounded-sm'>restart</button>",
    "<svg viewBox='0 0 100 100'><path d='M10 10 L90 90' stroke='#0070f3' stroke-width='2' /></svg>",
    "<link rel='preconnect' href='https://fonts.googleapis.com' crossorigin />",
    "<input type='text' id='typing-input' class='absolute opacity-0 pointer-events-none' />",
    "<footer class='mt-auto border-t border-hairline py-8'><span class='text-xs'>copyright</span></footer>"
  ]
};
