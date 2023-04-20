import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
    },
    title: {
        marginBottom: theme.spacing(4),
    },
    subtitle: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    experienceItem: {
        marginBottom: theme.spacing(4),
    },
}));

function Resume() {
    const classes = useStyles();

    // 假資料
    const skills = [
        'React',
        'Vue',
        'Node.js',
        'JavaScript',
        'TypeScript',
        'CSS',
        'HTML',
    ];

    const experiences = [
        {
            company: 'ABC Company',
            title: '前端工程師',
            startDate: '2019/01',
            endDate: '2020/12',
            description: '負責公司網站的前端開發與維護。',
        },
        {
            company: 'XYZ Company',
            title: '資深前端工程師',
            startDate: '2021/01',
            endDate: '2023/04',
            description: '負責公司新產品的前端架構設計與實作。',
        },
    ];

    return (
        <Box className={classes.container}>
            <Typography variant="h4" component="h1" className={classes.title}>
                Vader 的履歷表
            </Typography>

            <Box>
                <Typography variant="h5" component="h2" className={classes.subtitle}>
                    技能
                </Typography>
                <Typography variant="body1">{skills.join(', ')}</Typography>
            </Box>

            <Divider className={classes.divider} />

            <Box>
                <Typography variant="h5" component="h2" className={classes.subtitle}>
                    經歷
                </Typography>
                {experiences.map((experience, index) => (
                    <Box key={index} className={classes.experienceItem}>
                        <Typography variant="h6">
                            {experience.company} - {experience.title}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {experience.startDate} ~ {experience.endDate}
                        </Typography>
                        <Typography variant="body1">{experience.description}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Resume;
