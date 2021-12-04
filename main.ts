input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showIcon(IconNames.Silly)
    soundExpression.slide.play()
    Timer = 0
})
input.onButtonPressed(Button.A, function () {
    Timer = 0
    RPS = randint(0, 3)
    if (RPS == 1) {
        basic.showIcon(IconNames.Square)
    } else if (RPS == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (RPS == 3) {
        basic.showIcon(IconNames.Scissors)
    }
    basic.clearScreen()
    Timer = 0
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
    soundExpression.giggle.play()
    Timer = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.play()
    Timer = 0
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.pause(2000)
    basic.showIcon(IconNames.Fabulous)
    soundExpression.twinkle.play()
    Timer = 0
})
let RPS = 0
let Timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . # # # .
    `)
soundExpression.yawn.play()
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
soundExpression.hello.play()
Timer = 0
basic.forever(function () {
    basic.pause(1000)
    Timer += 1
    if (Timer >= 15) {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.play()
    }
})
