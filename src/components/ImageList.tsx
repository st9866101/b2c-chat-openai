import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import { checkWin } from "../utils/mahjongUtils";
// import BlindSpotIcon from "./blind_spot_icon.svg";

// import { ReactComponent as BlindSpotIcon } from './blind_spot_icon.svg'

import t1 from "../assets/mj/t1.svg";
import t2 from "../assets/mj/t2.svg";
import t3 from "../assets/mj/t3.svg";
import t4 from "../assets/mj/t4.svg";
import t5 from "../assets/mj/t5.svg";
import t6 from "../assets/mj/t6.svg";
import t7 from "../assets/mj/t7.svg";
import t8 from "../assets/mj/t8.svg";
import t9 from "../assets/mj/t9.svg";
import w1 from "../assets/mj/w1.svg";
import w2 from "../assets/mj/w2.svg";
import w3 from "../assets/mj/w3.svg";
import w4 from "../assets/mj/w4.svg";
import w5 from "../assets/mj/w5.svg";
import w6 from "../assets/mj/w6.svg";
import w7 from "../assets/mj/w7.svg";
import w8 from "../assets/mj/w8.svg";
import w9 from "../assets/mj/w9.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "0 20px",
        maxWidth: 1000,
    },
    image: {
        width: "100%",
        height: "auto",
    },
}));

const ImageList: React.FC = () => {
    const classes = useStyles();
    const [mjArray, setMjArray] = useState<string[]>([]); // 新增 mjArray 狀態

    const mjS = [
        { name: "t1", image: t1 },
        { name: "t2", image: t2 },
        { name: "t3", image: t3 },
        { name: "t4", image: t4 },
        { name: "t5", image: t5 },
        { name: "t6", image: t6 },
        { name: "t7", image: t7 },
        { name: "t8", image: t8 },
        { name: "t9", image: t9 },
        { name: "w1", image: w1 },
        { name: "w2", image: w2 },
        { name: "w3", image: w3 },
        { name: "w4", image: w4 },
        { name: "w5", image: w5 },
        { name: "w6", image: w6 },
        { name: "w7", image: w7 },
        { name: "w8", image: w8 },
        { name: "w9", image: w9 },
    ];
    const handleTileClick = (name: string): void => {
        const maxMjS = 16;
        const count = mjArray.filter((item: string) => item === name).length;

        if (count < 4 && mjArray.length < maxMjS) {
            // const sortedMjArray = [...mjArray, name].sort((a, b) => {
            //     const aRank = getRank(a);
            //     const bRank = getRank(b);
            //     return aRank - bRank;
            // });
            // setMjArray(sortedMjArray);
            setMjArray((prevArray: string[]) => [...prevArray, name]);
        }
    };
    // 排序內容
    const getRank = (name: string): number => {
        const rankTable: { [key: string]: number } = {
            t: 0,
            w: 1,
            b: 2,
            s: 3
        };

        const prefix = name.charAt(0);
        const number = parseInt(name.substring(1));

        return rankTable[prefix] * 9 + number;
    };
    //用字串找圖片
    const getTileImage = (name: string): string | undefined => {
        const tile = mjS.find(tile => tile.name === name);
        return tile?.image;
    };
    // 刪除牌組
    const removeMjFromArray = (name: string) => {
        const index = mjArray.findIndex((item) => item === name);
        if (index >= 0) {
            setMjArray((prevArray) => {
                const newArray = [...prevArray];
                newArray.splice(index, 1);
                return newArray;
            });
        }
    };

    function handleClick() {
        const tiles = ["t1", "t2", "t3", "t4", "t5", "t6", "w4", "w5", "w6", "w7", "w8", "w9", "w2", "w2", "w2", "w3"];
        // const result = canWinMahjong(tiles);
        // console.log("你可以胡牌！" + JSON.stringify(result));
        // if (result.canWin) {
        //     console.log("你可以胡牌！");
        //     if (result.winningTiles) {
        //         console.log(`你聽的牌是：${result.winningTiles.join(", ")}`);
        //     }
        // } else {
        //     console.log("你不能胡牌。");
        // }
    }

    return (
        // 原始
        <Box className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={10} style={{ margin: '0 auto' }}>
                    <Grid container spacing={3}>
                        {mjS.map((tile) => (
                            <Grid key={tile.name} item xs={2} sm={1} onClick={() => handleTileClick(tile.name)}>
                                <img className={classes.image} src={tile.image} alt={tile.name} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={10} style={{ margin: '0 auto' }}>
                    <Grid container spacing={1}>
                        {mjArray.map((name, index) => (
                            <Grid key={index} item xs={2} sm={1}
                                onClick={() => removeMjFromArray(name)}
                            >
                                <img className={classes.image} src={getTileImage(name)} alt={name} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
            <button onClick={handleClick}>檢查胡牌</button>
            {'這裡' + JSON.stringify(mjArray)}

            {/* <BlindSpotIcon fill={'blue'}></BlindSpotIcon> */}

        </Box>
        // 原始

    );
};

export default ImageList;
