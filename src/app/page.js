import FormFields from '@/app/Components/Form';

export default function Home() {
  return (
    <main className="flex items-center flex-col p-10 min-h-screen">
      <div className="font-bold text-lg">Please fill the below fields</div>
      <FormFields />
    </main>
  );
}
