"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ArticleCard } from "@ui/articleCard";
import { useParams } from "next/navigation";
import Footer from "@ui/footer";
import Link from "next/link";
import Header from "@ui/header";
import SocialCard from "@ui/socialCard";
import Head from "next/head";
import Share from "@ui/share";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function articleReader() {
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        console.error("Article not found");
        setArticle(false);
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      } else {
        setArticle(data);
      }
    };

    const fetchAll = async () => {
      const { data, error } = await supabase
        .from("Nannuru_articles_table")
        .select("*");

      if (error) console.error(error);
      else setArticles(data);
    };

    fetchArticle();
    fetchAll();
  }, [id]);

  if (article === null) return <div>Loading...</div>;
  if (article === false)
    return (
      <div className="text-center p-4 text-red-500">
        Article not found. Redirecting to home page in 5s...
      </div>
    );

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Head>
        <meta property="og:title" content={article.Heading} />
        <meta property="og:description" content={article.subHeading} />
        <meta property="og:image" content={article.imgUrl} />
        <meta property="og:url" content={currentUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={article.imgUrl} />
        <meta name="twitter:title" content={article.Heading} />
        <meta name="twitter:description" content={article.subHeading} />
      </Head>

      <Header title="Nannuru" />
      <div className="p-4 max-w-3xl mx-auto">
        <div className="flex">
          <h1 className="text-2xl font-bold">{article.Heading}</h1>
          <Share
            className="ml-auto inline w-tuo h-auto flex"
            id={id}
            imageUrl={article.imgUrl}
          />
        </div>
        <p className="text-sm text-gray-500">{article.date}</p>
        <img src={article.imgUrl} alt="" className="my-4 w-full rounded" />
        <p>{article.subHeading}</p>
        <p>{article.content}</p>
        <div className="flex justify-center items-center">
          <p className="mt-12">End</p>
        </div>
        <hr className="my-4 border-t border-gray-300 " />
        <div className="flex-wrap gap-2 mt-[80px] mb-[80px] flex justify-center items-center w-full h-auto">
          <fieldset>
            <legend className="text-3xl font-bold text-gray-700 -ml-6 mb-6">
              Share this article <span>❤️</span>
            </legend>
            <div className="flex-wrap gap-2 scale-[1.2] flex justify-center items-center w-full h-auto">
              <SocialCard
                linkUrl={`https://www.facebook.com/sharer/sharer.php?u=https://nannuru.com/articles/${id}`}
                imgUrl="/2048px-Facebook-f-logo-2021-svg-removebg-preview.png"
                name="facebook"
              />
              <SocialCard
                linkUrl={`https://api.whatsapp.com/send?text=${currentUrl}`}
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                name="whatsapp"
              />
            </div>
          </fieldset>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-[100px]">
          {articles.map((a) => (
            <Link href={`/articles/${a.id}`} key={a.id}>
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
      </div>
      <Footer />
    </>
  );
}
