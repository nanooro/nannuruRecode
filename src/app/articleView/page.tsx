"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { ArticleCard } from "@ui/articleCard";
import Header from "@ui/header";
import Footer from "@ui/footer";
import Link from "next/link";

export default function ArticleScrollView() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("*");

      if (error) console.error(error);
      else setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <Header title="Nannuru" />
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        {articles.map((a) => (
          <Link href={`/articleView/${a.id}`} key={a.id}>
            <ArticleCard
              imgUrl={a.imgUrl}
              Heading={a.Heading}
              subHeading={a.subHeading}
              date={a.date}
              rating={a.rating}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
