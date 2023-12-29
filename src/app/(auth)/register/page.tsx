import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Page Title",
  description: "Register Page description",
  openGraph: {
    images: "https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg",
  },
};
export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Register</p>
    </main>
  );
}
