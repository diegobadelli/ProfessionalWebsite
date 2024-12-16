document.addEventListener("DOMContentLoaded", function () {
    function loadBlogPosts() {
        const blogPosts = [
            {
                title: "Exploring the World of Machine Learning",
                excerpt: "Discover the fundamentals and transformative potential of machine learning in this article.",
                image: "img/blog1.png",
                link: "blog.html",
                date: "2024-12-15",
            },
            {
                title: "Success Story: Furukawa Electric Uses SIKORA’s CENTERVIEW 8000",
                excerpt: "The CENTERVIEW 8000 was used for Inline measurement of eccentricity, diameter, ovality, and wall thickness for manufacturing process control.",
                image: "img/Diego_sikora.jpg",
                link: "https://www.wirecable.in/furukawa-electric-uses-sikoras-centerview-8000-for-network-cable-production/",
                date: "2024-12-15",
            },
            {
                title: "Wire Drawing",
                excerpt: "Participation in the Technical Symposium on Wire Drawing by the company Niehoff-Herborn.",
                image: "img/simposio.jpg",
                link: "https://www.linkedin.com/posts/diegobadelli_trefilaaexaeto-inovaaexaetoindustrial-lideranaexaempresarial-activity-7094845687451803649-fHVh?utm_source=share&utm_medium=member_desktop",
                date: "2024-12-15",
            },
            {
                title: "The Power of Machine Learning",
                excerpt: "Discover how machine learning is transforming industries and enabling smarter decisions.",
                image: "img/machine-learning.jpg",
                link: "#",
                date: "2024-12-15",
            },
            {
                title: "Optimizing Manufacturing Processes",
                excerpt: "A deep dive into modern techniques for improving efficiency in production lines.",
                image: "img/manufacturing.jpg",
                link: "#",
                date: "2024-11-20",
            },
            {
                title: "A Guide to Data Visualization",
                excerpt: "Learn how to turn complex data into meaningful and actionable insights.",
                image: "img/data-visualization.jpg",
                link: "#",
                date: "2024-10-30",
            },
        ];

        const blogContainer = document.getElementById("blog-posts");
        blogPosts.forEach((post) => {
            const blogCard = `
                <div class="col-6 col-sm-4 col-lg-2">
                    <div class="card">
                        <img src="${post.image}" class="card-img-top" alt="${post.title}">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.excerpt}</p>
                            <a href="${post.link}" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            `;
            blogContainer.innerHTML += blogCard;
        });
    }

    loadBlogPosts();
});