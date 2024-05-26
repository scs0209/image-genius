import React from "react";
import { Collection } from "@/components/shared/Collection";
import Hero from "@/components/shared/Hero";
import { getAllImages } from "@/lib/actions/image.actions";
import GoogleTranslate from "@/components/shared/GoogleTranslate";

const HomePage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <Hero />

      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>

      <GoogleTranslate />
    </>
  );
};

export default HomePage;
