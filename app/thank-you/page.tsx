import { Button } from "@/components/button";

export default function ThankYouPage() {
  return (
    <main className="section bg-white">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-navy-950">Thank you. Your enquiry has been captured.</h1>
        <p className="mt-4 text-lg leading-8 text-navy-700">Atlas Consultant will review the details and connect with your society committee shortly.</p>
        <Button href="/" className="mt-8">Back to home</Button>
      </div>
    </main>
  );
}
