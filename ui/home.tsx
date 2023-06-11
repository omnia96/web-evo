'use client';
import React, {useEffect, useState} from 'react';
import styles from '../styles/hello.module.scss';
import CommonHead from '../components/common-head';
import Image from 'next/image';
import {Images} from '../core/libs/images';
import {useRouter} from 'next/navigation';
import {LoadingButton} from '@mui/lab';
import {
  Box,
  Container,
  Divider,
  Grid,
  ListItem,
  Typography,
  List,
  ListItemText,
  ListItemIcon, Button,
} from '@mui/material';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  Diversity1 as Diversity1Icon,
  GitHub as GitHubIcon,
  East as EastIcon,
  South as SouthIcon,
} from '@mui/icons-material';
import Icons from '../core/libs/icons';


/**
 * @class Home
 * @extends React.Component
 */
export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const technologies: any[] = [
    {id: 1, name: 'Angular', image: Images.angularLogo},
    {id: 2, name: 'React.js', image: Images.reactLogo},
    {id: 3, name: 'Vue', image: Images.vueLogo},
    {id: 4, name: 'Nest.js', image: Images.nestjsLogo},
    {id: 5, name: 'Nuxt.js', image: Images.nuxtJsLogo},
    {id: 6, name: 'Next.js', image: Images.nextJsLogo},
  ];
  const imageStyle = {
    width: '100%',
    height: 'auto',
  };
  useEffect(() => {
    router.prefetch('/blogs');
  }, []);
  const toTechnologies = async () => {
    const anchorElement = document.getElementById('technologies');
    if (anchorElement) {
      anchorElement.scrollIntoView(
          {behavior: 'smooth'},
      );
    }
  };
  const toBlog = async () => {
    setLoading(true);
    await router.push('/blogs');
    setLoading(false);
  };
  /**
   * render the component
   * @return {JSX.Element}
   */
  return (
    <Container maxWidth={'lg'}>
      <CommonHead/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{order: 1}}>
          <h1 className={styles['h1']}>Web Evolution 不仅仅是一家软件开发工作室</h1>

          <Box className={styles['image']} sx={{display: {xs: 'block', md: 'none'}}}>
            <Image
              alt={'骄傲的编码员'}
              src={Images.undrawProudCoder}
              style={imageStyle}
            />
          </Box>
          <Typography variant={'body1'}>
              我们是一支由创新驱动的团队，我们通过融合最聪明的技术思想和尖端技术来实现不可能的目标。
          </Typography>
          <Box sx={{mt: 4}}>
            <div onClick={toTechnologies}>
              <Button
                sx={{color: '#fff', width: '100%', borderRadius: '2rem'}}
                color={'primary'} variant="contained">
                <span>查看我们的技术堆栈</span>
                <SouthIcon sx={{ml: 1}}/>
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: 2}}>
          <Box className={styles['image']} sx={{display: {xs: 'none', md: 'block'}}}>
            <Image
              src={Images.undrawProudCoder}
              alt={'骄傲的编码员'}
              style={imageStyle}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{order: 3}}>
          <Divider/>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 4, md: 5}}}>
          <div className={styles['h1']}>优先事项1：培养专业技术成长</div>
          <Box className={styles['image']} sx={{display: {xs: 'block', md: 'none'}}}>
            <Image
              src={Images.undrawTeamCollaboration}
              alt={'骄傲的编码员'}
              style={imageStyle}
            />
          </Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <CodeIcon/>
              </ListItemIcon>
              <ListItemText>自我发展的文化</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon/>
              </ListItemIcon>
              <ListItemText>技能提升时间作为计划的一部分</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Diversity1Icon/>
              </ListItemIcon>
              <ListItemText>内部和外部知识共享</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GitHubIcon/>
              </ListItemIcon>
              <ListItemText>对开源贡献</ListItemText>
            </ListItem>
          </List>
          <Box>
            <div onClick={toBlog}>
              <LoadingButton
                sx={{color: '#fff', width: '100%', borderRadius: '2rem'}}
                loading={loading}
                loadingIndicator={'Loading...'} color={'primary'} variant="contained">
                <span>访问博客</span>
                <EastIcon sx={{ml: 1}}/>
              </LoadingButton>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 5, md: 4}}}>
          <Box className={styles['image']} sx={{display: {xs: 'none', md: 'block'}}}>
            <Image
              src={Images.undrawTeamCollaboration}
              alt={'团队协作'}
              style={imageStyle}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{order: 6}}>
          <Divider/>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 8, md: 7}}}>
          <div className={styles['h1']}>优先事项2: 让外包更人性化</div>
          <Box className={styles['image']} sx={{display: {xs: 'block', md: 'none'}}}>
            <Image src={Images.undrawEngineeringTeam} alt={'工程团队'} style={imageStyle}/>
          </Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <Icons.Comment/>
              </ListItemIcon>
              <ListItemText>加强沟通</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icons.PersonOff/>
              </ListItemIcon>
              <ListItemText>减少官僚主义</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icons.SafetyDivider/>
              </ListItemIcon>
              <ListItemText>扁平化公司结构</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icons.Group/>
              </ListItemIcon>
              <ListItemText>我们都是公司内部和客户的合作伙伴</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 7, md: 8}}}>
          <Box className={styles['image']} sx={{display: {xs: 'none', md: 'block'}}}>
            <Image
              src={Images.undrawEngineeringTeam}
              alt={'工程团队'}
              style={imageStyle}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{order: 9}}>
          <Divider/>
        </Grid>

        <Grid item xs={12} md={6} sx={{order: {xs: 10, md: 11}}}>
          <div className={styles['h1']}>优先事项3: 让最复杂的想法栩栩如生</div>
          <Box className={styles['image']} sx={{display: {xs: 'block', md: 'none'}}}>
            <Image src={Images.undrawSolutionMindset} alt={'解决方案思维'} style={imageStyle}/>
          </Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <Icons.TrendingUp/>
              </ListItemIcon>
              <ListItemText>将技术推向极限</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icons.Biotech/>
              </ListItemIcon>
              <ListItemText>在公司内部建立独特的专业知识</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icons.DesktopMac/>
              </ListItemIcon>
              <ListItemText>掌握尖端技术</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icons.PsychologyAlt/>
              </ListItemIcon>
              <ListItemText>始终找到满足客户业务需求的方法</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 11, md: 10}}}>
          <Box className={styles['image']} sx={{display: {xs: 'none', md: 'block'}}}>
            <Image
              src={Images.undrawSolutionMindset}
              alt={'解决方案思维'}
              style={imageStyle}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{order: 12}}>
          <Divider/>
        </Grid>

        <Grid item xs={12} md={6} sx={{order: {xs: 13}}} id={'technologies'}>
          <div className={styles['h1']}>技术堆栈</div>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 14}}}>
          <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', my: 2}}>
            {technologies.map((it, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '30%',
                  mb: 1,
                }}>
                <div>
                  <Image alt={it.name} src={it.image} width={50} height={50}></Image>
                </div>
                <Typography variant={'body1'} sx={{overflow: 'hidden'}}>{it.name}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{mb: 6}}/>
        </Grid>
        <Grid item xs={12} sx={{order: 15}}>
          <Divider/>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 16, md: 17}}}>
          <div className={styles['h1']}>我们在这里帮助您构建您的Web项目</div>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 17, md: 16}}}>
          <div className={styles['image']}>
            <Image
              src={Images.undrawUnderConstruction}
              alt={'🚧正在施工🚧'}
              style={imageStyle}
            />
          </div>
        </Grid>
        <Grid item xs={12} sx={{order: 18}}>
          <Divider/>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 19, md: 19}}}>
          <div className={styles['h1']}>我们提供丰富的技术文章支持，您可以在这里获得更多的帮助</div>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 20, md: 20}}}>
          <div className={styles['image']}>
            <Image
              src={Images.undrawBlogPost}
              alt={'博客文章'}
              style={imageStyle}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}