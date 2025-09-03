interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Project: {slug}</h1>
        <p className="text-center text-gray-600">Project details coming soon.</p>
      </div>
    </div>
  );
}
