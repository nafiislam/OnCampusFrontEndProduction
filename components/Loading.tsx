// "use client";

// import animationData from "@/public/loading/loading1.json"; // Import your JSON animation file
// import lottie from "lottie-web";
// import { useEffect } from "react";
// import "tailwindcss/tailwind.css";

// const Animation = () => {
//   useEffect(() => {
//     // Initialize Lottie animation
//     const anim = lottie.loadAnimation({
//       container: document.getElementById("animation-container"),
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//     });

//     return () => {
//       anim.destroy(); // Cleanup animation when component unmounts
//     };
//   }, []);

//   return <div id="animation-container" className="w-64 h-64 mx-auto"></div>;
// };

// const App = () => {
//   return (
//     <div className="flex flex-col gap-8 justify-center items-center">
//       <Animation />
//       <p>Redirecting to Home PAGE</p>
//     </div>
//   );
// };

// export default App;
