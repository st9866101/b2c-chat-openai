
import { Container, Typography, Card, CardContent, Divider, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';

// 定義資料型別
type TaiwanStock = {
    name: string;
    value: number;
};

// 建立假資料
const fakeData = {
    "title": "113年01月05日 大盤統計資訊",
    "fields": [
        "成交統計",
        "成交金額(元)",
        "成交股數(股)",
        "成交筆數"
    ],
    "data": [
        [
            "1.一般股票",
            "250,969,506,862",
            "3,116,284,902",
            "1,731,593"
        ],
        [
            "2.台灣存託憑證",
            "173,085,645",
            "28,934,222",
            "5,670"
        ],
        [
            "3.受益憑證",
            "0",
            "0",
            "0"
        ],
        [
            "4.ETF",
            "16,561,955,397",
            "1,005,053,385",
            "289,881"
        ],
        [
            "5.受益證券",
            "7,409,744",
            "510,090",
            "114"
        ],
        [
            "6.變更交易股票",
            "12,236,700",
            "2,127,302",
            "1,073"
        ],
        [
            "7.認購(售)權證",
            "2,040,330,690",
            "1,916,908,000",
            "67,398"
        ],
        [
            "8.轉換公司債",
            "0",
            "0",
            "0"
        ],
        [
            "9.附認股權特別股",
            "0",
            "0",
            "0"
        ],
        [
            "10.附認股權公司債",
            "0",
            "0",
            "0"
        ],
        [
            "11.認股權憑證",
            "0",
            "0",
            "0"
        ],
        [
            "12.公司債",
            "0",
            "0",
            "0"
        ],
        [
            "13.ETN",
            "5,964,330",
            "952,000",
            "199"
        ],
        [
            "14.創新板股票",
            "112,865,414",
            "1,755,748",
            "846"
        ],
        [
            "15.創新板-變更交易方法股票",
            "0",
            "0",
            "0"
        ],
        [
            "證券合計(1+6+14+15)",
            "251,094,608,976",
            "3,120,167,952",
            "1,733,512"
        ],
        [
            "總計(1~15)",
            "269,883,354,782",
            "6,072,525,649",
            "2,096,774"
        ]
    ],
    "hints": "單位：元、股"
}
const useStyles = makeStyles({
    root: {
        paddingTop: 20,
        // height: '80vh',
        display: 'flex',
        alignItems: 'center',
    },
});


function HistoricalTable() {
    const [tableData, setTableData] = useState([]);

    const classes = useStyles();

    // useEffect(() => {
    //     // 使用 fetch 發送 GET 請求至台灣證券交易所 API
    //     fetch('https://www.twse.com.tw/rwd/zh/afterTrading/MI_INDEX?response=json&_=' + Date.now())
    //         .then(response => response.json())
    //         .then(data => {
    //             const responseData = data;
    //             console.log(data, '台灣證券交易所 API')
    //             // 更新 tableData 狀態
    //             // setTableData(responseData);

    //         })
    //         .catch(error => {
    //             console.error('Fetch Error:', error);
    //         });
    // }, []);

    return (
        <Container className={classes.root}>
            <Card style={{ width: '100%' }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        台灣大盤資料
                    </Typography>
                    <Divider />

                    {/* 表格 */}
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {fakeData.fields.map((field, index) => (
                                        <TableCell key={'field' + index}
                                            style={{ backgroundColor: '#1565c0', color: '#fff' }}
                                        >{field}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {fakeData.data.map((rowData, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        {rowData.map((cellData, cellIndex) => (
                                            <TableCell key={cellIndex}>{cellData}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Container>
    );
}

export default HistoricalTable;