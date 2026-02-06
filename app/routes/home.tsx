import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { Link } from "react-router"
import { SONG_TITLE } from "~/constants/songs/brand-new-music"
import type { Route } from "./+types/home"

export const meta = (_args: Route.MetaArgs) => {
  return [
    { title: "カラオケ風音程練習アプリ" },
    {
      name: "description",
      content: "音程を練習して採点するカラオケ風アプリ",
    },
  ]
}

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          py: 3,
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          カラオケ風音程練習アプリ
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          曲選択・曲設定の後、「練習する」で練習画面へ
        </Typography>

        <Paper sx={{ p: 2, width: "100%", mb: 3 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            曲選択
          </Typography>
          <Typography variant="body1">{SONG_TITLE}</Typography>
          <Typography variant="caption" color="text.secondary">
            （1曲固定）
          </Typography>
        </Paper>

        <Button
          component={Link}
          to="/practice"
          variant="contained"
          size="large"
          fullWidth
        >
          練習する
        </Button>
      </Box>
    </Container>
  )
}

export default Home
