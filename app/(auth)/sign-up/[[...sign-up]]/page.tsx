"use client";

import React, { useState } from "react"; // Ensure useState is imported from React
import PageWrapper from "@/components/Container/PageWrapper";
import { useSignUp } from "@clerk/nextjs";

export default function CustomSignUpPage() {
    const { isLoaded, signUp } = useSignUp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isLoaded) return;

        try {
            await signUp.create({
                emailAddress: email,
                password,
                publicMetadata: {
                    phoneNumber,
                    address,
                    company,
                },
            });

            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            alert("Check your email for the verification code!");
        } catch (err: any) {
            console.error("Error:", err);
            setError(err.errors[0]?.message || "An unexpected error occurred.");
        }
    };

    return (
        <PageWrapper>
            <div className="flex min-w-screen justify-center my-[5rem]">
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Company:</label>
                        <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </PageWrapper>
    );
}
