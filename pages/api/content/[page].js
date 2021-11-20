

export default function handler(req, res) {

    const { page } = req.query

    try {
        let json = require('../../../public/content/' + page + '.json')
   
        res.status(200).json({json})
        
    } catch (error) {
        res.status(404).json({ message: 'No such file: ' + page})
    }
  }
  




    
