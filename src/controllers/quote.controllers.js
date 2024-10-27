import fs from "fs";
var data = fs.readFileSync('quote.json', 'utf8');
var quotes = JSON.parse(data);

const randomQuote = async (req, res) => {
    try {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        var randomQuote = await quotes[randomIndex];
        return res
            .status(200)
            .json(randomQuote);
    } catch (err) {
        return res
            .status(502)
            .json(["Something went wrong"]);
    }
}

const quoteById = async (req, res) => {
    const { id } = req.params;

    try {
        var quote = await quotes.find(quote => quote.id === parseInt(id));
        if (quote) {
            return res
                .status(200)
                .json(quote);
        } else {
            return res
                .status(404)
                .json(["Quote not found"]);
        }

    } catch (err) {
        return res
            .status(502)
            .json(["Something went wrong"]);
    }
}

export {
    randomQuote, quoteById
}