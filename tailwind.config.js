/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bảng màu ấm, nghỉ dưỡng (slow-living)
        cream: '#f7f3ec',
        sand: '#e9e0d2',
        clay: '#b08968',
        bark: '#5c4433',
        forest: '#3f4a3c',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        // Nút điện thoại "lắc lắc" để thu hút sự chú ý
        wiggle: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(-18deg)' },
          '20%, 40%': { transform: 'rotate(18deg)' },
        },
      },
      animation: {
        // chạy 1.2s, lặp lại sau mỗi chu kỳ (nghỉ giữa các lần lắc nhờ keyframe giữ 0deg)
        wiggle: 'wiggle 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
