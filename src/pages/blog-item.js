import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BlogSingle from "../components/BlogSingle";
import { useParams } from "react-router-dom";
import { API_ENDPOINTS } from "../configs/blogsConfig";
import { generateLocalDate } from "../utils/common-functions";

const BlogSinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const singlePOstUrl = API_ENDPOINTS.FETCH_SINGLE_POST(id);
    fetch(singlePOstUrl)
      .then((response) => response.json())
      .then((res) => {
        setPost(res);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);


  if (!post) {
    return (
      <Layout>
        <NavOne />
        <PageHeader title="Blog Details" />
        <p>Blog not found</p>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout pageTitle={`TP Trust | ${post.title}`}>
      <NavOne />
      <PageHeader title={`${post.title}`} />
      <BlogSingle
        title={post.title}
        author={post.author.name}
        date={generateLocalDate(post.date)}
        text={post.content}
        picture_blog={post.featured_image}
      />
      <Footer />
    </Layout>
  );
};

export default BlogSinglePage;

