export const drawRect = (detections : any, ctx : any) => {
    detections.forEach((prediction: { [x: string]: any; }) => {
        //Get prediction
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        // set styling

        const color = 'pink'
        ctx.strokeSylt = color
        ctx.font = '30px MS Comic Sans'
        ctx.fillStyle = color

        //Draw rectangle and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    });
}