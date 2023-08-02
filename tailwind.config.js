/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      aku:["Poppins", "sans-serif"]
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
          
                
 "primary": "#2dd4bf",
                 
     
 "secondary": "#99f6e4",
                 
        "accent": "#BDF2FF",
                 
             
        "neutral": "#4b5563",
            
 "base-100": "#f5f5f4",
                 
        "info": "#3ABFF8",
                 
        "success": "#36D399",
                 
        "warning": "#FBBD23",
                 
        "error": "#F87272",
                 },
    }],
  },
}

