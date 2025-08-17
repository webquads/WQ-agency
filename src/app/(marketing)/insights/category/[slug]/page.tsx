interface InsightCategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function InsightCategoryPage({ params }: InsightCategoryPageProps) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Category: {slug}</h1>
        <p className="text-center text-gray-600">Category insights coming soon.</p>
      </div>
    </div>
  );
}
