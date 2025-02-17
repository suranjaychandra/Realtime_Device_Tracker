const socket = io();  // ✅ Now this should work!

console.log("✅ script.js loaded!");

socket.on("connect", () => {
    console.log("✅ Connected to server via Socket.io!");
});
