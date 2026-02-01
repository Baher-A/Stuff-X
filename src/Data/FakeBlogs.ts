export type Blogtype = {
  id?: number;
  title: string;
  note: string;
  content: string;
  author: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
};
export const Default_Blogs: Blogtype[] = [
  {
    title: "Better Design for Your Digital Products",
    note: "Learn how thoughtful design decisions can elevate your digital products and improve user experience.",
    content:
      "Great digital products are built on strong design foundations. From typography to spacing, every detail matters when creating experiences users love.",
    author: "Ahmed Hassan",
    date: "Jan 12, 2026",
    category: "Design",
    readTime: "5 min read",

    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Why UX Matters in Modern Digital Products",
    note: "User experience is no longer optional. Discover why UX plays a critical role in product success.",
    content:
      "UX design focuses on understanding users, their needs, and their behaviors. A well-designed UX can increase engagement and retention significantly.",
    author: "Sara Ali",
    date: "Jan 8, 2026",
    readTime: "5 min read",

    category: "UX",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Design Systems: Building Consistency at Scale",
    note: "Design systems help teams create consistent, scalable, and efficient digital products.",
    content:
      "By using a shared set of components and guidelines, teams can move faster while maintaining visual and functional consistency.",
    author: "Mohamed Adel",
    date: "Jan 3, 2026",
    readTime: "5 min read",

    category: "UI",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "How Color Theory Impacts Digital Product Design",
    note: "Colors influence emotions and decisions. Learn how to use color theory effectively in digital products.",
    content:
      "Choosing the right color palette can dramatically improve usability and brand perception. Color theory helps designers create harmony and clarity.",
    author: "Omar Khaled",
    date: "Dec 28, 2025",
    category: "Design",
    readTime: "5 min read",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "From Idea to Launch: Building Digital Products",
    note: "A practical guide to turning ideas into successful digital products from concept to launch.",
    content:
      "Building a digital product requires clear planning, strong collaboration, and continuous iteration. Understanding the process helps teams avoid common pitfalls.",
    author: "Lina Mostafa",
    date: "Dec 20, 2025",
    category: "Product",
    readTime: "5 min read",

    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const categories = ["Design", "UI", "UX", "Product", "AI Tecknology"];
