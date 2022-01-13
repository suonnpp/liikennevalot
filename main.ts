basic.forever(function () {
    if (input.soundLevel() > 120) {
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        if (input.soundLevel() > 60) {
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else {
            if (input.soundLevel() > 20) {
                basic.pause(200)
                pins.digitalWritePin(DigitalPin.P1, 0)
                pins.digitalWritePin(DigitalPin.P0, 1)
            }
        }
    }
})
