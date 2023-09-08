export function checkWin(hand: string[], winTile: string): boolean {
    // 先將手牌排序
    hand.sort();

    // 拆分花色
    const characters: string[] = [];
    const bamboos: string[] = [];
    const dots: string[] = [];
    const winds: string[] = [];
    const dragons: string[] = [];
    const flowers: string[] = [];
    for (const tile of hand) {
        switch (tile[0]) {
            case "w":
                characters.push(tile);
                break;
            case "s":
                bamboos.push(tile);
                break;
            case "t":
                dots.push(tile);
                break;
            case "e":
            case "s":
            case "w":
            case "n":
                winds.push(tile);
                break;
            case "c":
            case "f":
            case "b":
                dragons.push(tile);
                break;
            case "f":
                flowers.push(tile);
                break;
        }
    }

    // 判斷是否可以胡牌
    if (checkBasicWin(characters, bamboos, dots, winds, dragons, flowers, winTile)) {
        return true;
    } else {
        return false;
    }
}

function checkBasicWin(
    characters: string[],
    bamboos: string[],
    dots: string[],
    winds: string[],
    dragons: string[],
    flowers: string[],
    winTile: string
): boolean {
    const handTiles = characters.concat(bamboos, dots, winds, dragons, flowers);
    // 計算每種牌的數量
    const tileCount: { [tile: string]: number } = {};
    for (const tile of handTiles) {
        if (tileCount[tile]) {
            tileCount[tile]++;
        } else {
            tileCount[tile] = 1;
        }
    }
    // 判斷是否有牌數大於4
    for (const tile in tileCount) {
        if (tileCount[tile] > 4) {
            return false;
        }
    }
    // 判斷是否有將牌
    if (!handTiles.includes(winTile)) {
        return false;
    }
    // 嘗試組成順子或刻子
    const candidateGroups: string[][] = [];
    for (const tile in tileCount) {
        const count = tileCount[tile];
        if (count >= 2) {
            // 嘗試組成將牌
            // const remainingTiles = handTiles.filter((t) => t !== tile);
            // const groups = tryFormGroups(remainingTiles);
            // if (groups) {
            //     candidateGroups.push(groups.concat([[tile, tile]].flat()));
            // }
        }
    }
    // 判斷是否有有效的組合方式
    for (const groups of candidateGroups) {
        const remainingTiles = handTiles.filter((t) => !groups.flat().includes(t));
        if (tryFormGroups(remainingTiles)) {
            return true;
        }
    }
    return false;
}

function tryFormGroups(tiles: string[]): string[][] | null {
    if (tiles.length === 0) {
        return [];
    }
    const head = tiles[0];
    // 嘗試組成順子
    if (tiles.includes(head[0] + (parseInt(head[1], 10) + 1).toString()) && tiles.includes(head[0] + (parseInt(head[1], 10) + 2).toString())) {
        const remainingTiles = tiles.filter((t) => t !== head && t !== head[0] + (parseInt(head[1], 10) + 1).toString() && t !== head[0] + (parseInt(head[1], 10) + 2).toString());
        const groups = tryFormGroups(remainingTiles);
        if (groups !== null) {
            return [[head, head[0] + (parseInt(head[1], 10) + 1).toString(), head[0] + (parseInt(head[1], 10) + 2).toString()]].concat(groups);
        }
    }
    // 嘗試組成刻子
    if (tiles.filter((t) => t === head).length >= 3) {
        const remainingTiles = tiles.filter((t) => t !== head).sort();
        const groups = tryFormGroups(remainingTiles);
        if (groups !== null) {
            return [[head, head, head]].concat(groups);
        }
    }
    // 無法組成有效的牌型
    return null;
}
