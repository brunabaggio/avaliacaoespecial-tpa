var notificacao = []

const deleteNotification = (req, res) => {
    var id = `${req.params.id}`;
    let valid = false;
    for (let i = 0; i < notificacao.length; i++) {
        if (id == notificacao[i].id) {
            notificacao.splice(i, 1);
            valid = true;
            res.json({message: "Notification Erased"})
        }
    }
}

const getNotification = (req, res) => {
    var subjectR = req.query.subject
    var statusR = req.query.status
    var nameR = req.query.name
    var data = [];

    if (subjectR != null) {
        for (let i = 0; i < notificacao.length; i++) {
            if (subjectR == notificacao[i].subject) {
                data.push(notificacao[i])
            }
        }
        res.json({ result: data })
    } else if (nameR != null) {
        for (let i = 0; i < notificacao.length; i++) {
            if (nameR == notificacao[i].name) {
                data.push(notificacao[i])
            }
        }
        res.json({ result: data })

    } else if (statusR != null) {
        for (let i = 0; i < notificacao.length; i++) {
            if (statusR == notificacao[i].status) {
                data.push(notificacao[i])
            }
        }
        res.json({ result: data })
    } else {
        res.json()

    }
}

const newNotification = (req, res) => {
    var body = req.body;

    var data = {
        'id': Math.random().toString(36).substr(2, 9),
        'content': body.content,
        'subject': body.subject,
        'name': body.name,
        'status': body.status,
    }
    notificacao.push(data)
    res.json({ message: "success", notificacao: data })

}


module.exports = {
    deleteNotification,
    getNotification,
    newNotification,
}
