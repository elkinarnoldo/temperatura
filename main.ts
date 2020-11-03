basic.forever(function () {
    if (input.temperature() < 23) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Sad)
    } else {
        if (input.temperature() >= 23 && input.temperature() <= 25) {
            basic.showNumber(input.temperature())
        } else {
            basic.showNumber(input.temperature())
            basic.showIcon(IconNames.Happy)
        }
    }
})
