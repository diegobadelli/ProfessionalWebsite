document.addEventListener("DOMContentLoaded", function () {
    function loadBlogPosts() {
        const blogPosts = [
            {
                title: "Exploring the World of Machine Learning",
                excerpt: "Discover the fundamentals and transformative potential of machine learning in this article.",
                image: "img/blog1.png",
                link: "articles/Machine_Learning.html",
                date: "2023-01-31",
            },
            {
                title: "Success Story: Furukawa Electric Uses SIKORA’s CENTERVIEW 8000",
                excerpt: "The CENTERVIEW 8000 was used for Inline measurement of eccentricity, diameter, ovality, and wall thickness for manufacturing process control.",
                image: "img/Diego_sikora.jpg",
                link: "https://www.wirecable.in/furukawa-electric-uses-sikoras-centerview-8000-for-network-cable-production/",
                date: "2021-09-01",
            },
            {
                title: "Wire Drawing",
                excerpt: "Participation in the Technical Symposium on Wire Drawing by the company Niehoff-Herborn.",
                image: "img/wire_draw.webp",
                link: "https://www.linkedin.com/posts/diegobadelli_trefilaaexaeto-inovaaexaetoindustrial-lideranaexaempresarial-activity-7094845687451803649-fHVh?utm_source=share&utm_medium=member_desktop",
                date: "2023-09-06",
            },
            {
                title: "Python Programming: Quick Tips for Beginners",
                excerpt: "Get started with Python programming with these essential tips designed to make your coding journey smoother and more enjoyable.",
                image: "img/Python_tips.webp",
                link: "articles/Python_tips.html",
                date: "2024-12-11",
            },
            {
                title: "CSS Tips for Beginners: Style Your Website Like a Pro",
                excerpt: "Transform your website design skills with these essential CSS tips tailored for beginners.",
                image: "img/Css_tips.webp",
                link: "articles/Css_tips.html",
                date: "2024-12-18",
            },
        ];

        const blogContainer = document.getElementById("blog-posts");
        blogPosts.forEach((post) => {
            const blogEntry = `
                <div class="col-12">
                    <div class="blog-entry">
                        <a href="${post.link}">
                            <h2 class="blog-title">${post.title}</h2>
                        </a>
                        <p class="blog-date">${post.date}</p>
                        <p class="blog-excerpt">${post.excerpt}</p>
                    </div>
                </div>
            `;
            blogContainer.innerHTML += blogEntry;
        });
    }

    loadBlogPosts();
});