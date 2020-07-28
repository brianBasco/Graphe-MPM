class Croix {

    constructor(width) {

        this.groupe = new Konva.Group({
            x: width - 150,
            y: 30
        })

        this.rect = new Konva.Rect({
            x: 0,
            y: 0,
            width: 100,
            height: 50,
            fill: 'orange',
            stroke: 'black',
            strokeWidth: 1,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffset: { x: 5, y: 5 },

        })
        this.croix = new Konva.Text({
            text: 'fermer',
            fontSize: 20,
            fill: 'black',
            width: 100,
            height: 50,
            align: 'center',
            verticalAlign: 'middle'
        })
        this.groupe.on('click', () => {
            //document.getElementById('container').style.display = "none"
            stage.width(0)
            stage.height(0)
        })

        this.groupe.on('mouseover', () => {
            document.body.style.cursor = "pointer"
        })

        this.groupe.on('mouseout', () => {
            document.body.style.cursor = "default"
        })

        this.groupe.add(this.rect)
        this.groupe.add(this.croix)
        return this.groupe
    }
}