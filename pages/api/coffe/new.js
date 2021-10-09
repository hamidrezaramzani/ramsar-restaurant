import withSession from '../../../lib/session'
import CoffeSchema from '../../../models/coffes';
export default withSession(async (req, res) => {
    if (req.method == "POST") {
        try {
            const { title } = req.body;
            const newCat = new CoffeSchema({
                title
            });
            const response = await newCat.save();
            console.log(response)
            // res.json({ message: "created" })
        } catch {
            res.end(400);
        }

    }
})
