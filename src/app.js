import express from "express";
import cors from "cors";
import path from "path";
import heroes from "./heroes.json" with { type: "json" };
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());

app.use(
    "/images",
    express.static(path.join(__dirname, "heroes"))
);

app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "Overwatch API",
    endpoints: {
      randomHero: "/random-hero",
      byClass: "/random-hero?class=tank | dps | support"
    }
  });
});

app.get("/random-hero", (req, res) => {
    const heroClass = req.query.class;
    let filtered = heroes;

    if (heroClass && heroClass !== "all") {
        filtered = heroes.filter(h => h.class === heroClass)
    }

    if (filtered.lenght === 0) {
        return res.json({
            name: "N/A",
            class: "N/A",
            image: "/images/unknown.png",
            url: ""
        });
    }

    const random =
        filtered[Math.floor(Math.random() * filtered.length)];

    res.json({
        name: random.name,
        class: random.class,
        image: `/images/${random.image}`,
        url: random.url
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API está ativa em http://localhost:${PORT}`);
});