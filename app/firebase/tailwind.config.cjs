/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    plugins: [],
    theme: {
        extend: {
            fontFamily: {
                'nunito': ['Nunito', 'sans-serif']
            }
        }
    }
}
