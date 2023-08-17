import React from 'react';

export default function Categorii({ categories as string }) {
  return (
    <div>
      {categories.map((category) => (
        <a href={/products/${category.id}} key={category.id}>
          <p>{category.denumire}</p>
          <img src={/image/${category.img}} alt={category.denumire} />
        </a>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('/categories.json'); // Fetch the JSON data
  const categories = await response.json(); // Parse the JSON data

  return {
    props: {
      categories: categories,
    },
  };
}
