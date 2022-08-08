// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    if (blockNumber > 42) {
        return blockNumber - 42;
    } else {
        return 42 - blockNumber;
    }
}

function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(blockNumber1, blockNumber2){
    if (blockNumber1 > blockNumber2){
        return (blockNumber1 - blockNumber2) * 264;
    } else {
        return (blockNumber2 - blockNumber1) * 264;
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return 0.02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else{
        return 'cannot travel that far';
    }
}