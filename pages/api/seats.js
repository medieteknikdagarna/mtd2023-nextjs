

export default function handler(req, res) {

    try {
        let json = require('../../public/content/seat-info/seat-info.json')
        res.status(200).json({json})
        
    } catch (error) {
        res.status(404).json({ message: 'No such file'})
    }
  }
  




    
