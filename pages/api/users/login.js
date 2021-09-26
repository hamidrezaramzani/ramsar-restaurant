import withSession from '../../../lib/session'
const UsersModel = require('../../../models/users');
import db from '../../../lib/db';
export default withSession(async (req, res) => {
    if (req.method == "POST") {
        const { username, password } = req.body;
        try{
            const response = await UsersModel.find({username , password});
            req.session.set("user", response[0]);
            await req.session.save();
              res.json({
                            login : response.length ? true : false
                        })

                }catch {
                    res.end(400);
                }

    }
})
