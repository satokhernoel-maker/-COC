import { supabase } from "./supabase.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

document.getElementById("signupBtn").addEventListener("click", async () => {

    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value
    });

    if (error) {
        message.textContent = error.message;
    } else {
        message.textContent = "Account created! Check your email.";
    }
});

document.getElementById("loginBtn").addEventListener("click", async () => {

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    });

    if (error) {
        message.textContent = error.message;
    } else {
        message.textContent = "Login successful!";
        console.log(data.user);
    }
});