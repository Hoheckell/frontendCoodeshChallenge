import React, { useEffect, useState } from "react";
import style from "./App.module.scss";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Loading from "./components/Loading";
import Pizza from "./components/Pizza";
import { graphService } from "./services/graph.service";
import { IPieGraph } from "./interfaces/pie-graph.interface";
import Bars from "./components/Bars";
import { IBarsGraph } from "./interfaces/bars-graph.interface";
import {
  Button,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ILaunch } from "./interfaces/launch.interface";
import ReactPaginate from "react-paginate";
import { ReactComponent as PreviousIcon } from "../src/assets/img/arrow_left_icn.svg";
import { ReactComponent as NextIcon } from "../src/assets/img/arrow_rigth_icn.svg";
import { ReactComponent as YoutubeIcon } from "../src/assets/img/youtube.svg";
import { ILaunchesList } from "./interfaces/launches-list.interface";
import { launchService } from "./services/launch.service";
import moment from "moment";
import SearchIcon from "@mui/icons-material/Search";
import { rocketService } from "./services/rocket.service";
import { IRocket } from "./interfaces/rocket.interface";

function App() {
  const [loading, setLoading] = useState(false);

  const [pieData, setPieData] = useState({} as IPieGraph);

  const [barData, setBarData] = useState({} as IBarsGraph);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState({} as ILaunchesList);
  const [shownItems, setShownItems] = useState([] as ILaunch[]);
  const [rockets, setRockets] = useState([] as IRocket[]);
  const [search, setSearch] = useState("");

  const handlePageClick = (event: { selected: number }) => {
    const newOffset =
      (event.selected * itemsPerPage) % currentItems?.results?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  const handlePageChange = (event: SelectChangeEvent) => {
    setitemsPerPage(Number(event.target.value) || 5);
  };

  const searchLaunch = async () => {
    setLoading(true);
    const data = await launchService.search(search);
    setCurrentItems(data);
    setLoading(false);
  };

  const setSearchValue = (value: string) => {
    if (value === "") {
      getLaunches();
    }
    setSearch(value);
  };

  const getLaunches = async () => {
    setLoading(true);
    const data = await launchService.getLaunches();
    setCurrentItems(data);
    setLoading(false);
  };

  useEffect(() => {
    const getLaunches = async () => {
      const data = await launchService.getLaunches();
      setCurrentItems(data);
    };
    const getPieData = async () => {
      const data = await graphService.getPieData();
      setPieData(data);
    };
    const getBarData = async () => {
      setLoading(true);
      const data = await graphService.getBarData();
      setBarData(data);
      setLoading(false);
    };
    const getRockets = async () => {
      const rockets = await rocketService.getRockets();
      setRockets(rockets);
    };
    if (rockets?.length === 0) getRockets();
    if (!pieData?.datasets) getPieData();
    if (!barData?.datasets) getBarData();
    if (!currentItems?.results) getLaunches();

    const endOffset = itemOffset + itemsPerPage;
    setShownItems(currentItems?.results?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(currentItems?.results?.length / itemsPerPage));
  }, [currentItems, itemOffset, itemsPerPage]);
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <RocketLaunchIcon sx={{ fontSize: "2rem", color: "#FF0000" }} /> Space X
        <Loading loading={loading} />
      </h1>
      <div className={style.piegraph}>
        {pieData?.labels?.length > 0 && (
          <Pizza
            labels={pieData.labels}
            datasets={pieData.datasets}
            success={pieData.success}
            fail={pieData.fail}
          />
        )}
      </div>
      <div className={style.bargraph}>
        {barData?.labels?.length > 0 && (
          <Bars labels={barData.labels} datasets={barData.datasets} />
        )}
      </div>
      <div className={style.search}>
        <h1 className={style.title}>Registro de lançamentos</h1>
        <FormControl
          sx={{ mt: 2 }}
          className={style.searchbar}
          variant="outlined"
        >
          <OutlinedInput
            id="search-address"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            value={search}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 2 }}
          className={style.searchbutton}
          onClick={searchLaunch}
        >
          Pesquisar
        </Button>
      </div>
      <div className={style.datatable}>
        <FormControl sx={{ mt: 2 }} size="small">
          <InputLabel id="items-por-pagina-label" variant="filled">
            Por página
          </InputLabel>
          <Select
            labelId="items-por-pagina-label"
            id="items-por-pagina"
            value={itemsPerPage.toString()}
            defaultValue="5"
            label="5"
            onChange={handlePageChange}
            className={style.selectperpag}
          >
            <MenuItem value={5}>
              <em>5</em>
            </MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Nº Vôo</TableCell>
                <TableCell align="right">Logo</TableCell>
                <TableCell align="right">Missão</TableCell>
                <TableCell align="right">Data de Lançamento</TableCell>
                <TableCell align="right">Foguete</TableCell>
                <TableCell align="right">Resultado</TableCell>
                <TableCell align="right">Vídeo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shownItems?.length > 0 &&
                shownItems.map((launch) => (
                  <TableRow
                    key={launch.id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                        cursor: "pointer",
                      },
                    }}
                  >
                    <TableCell align="right">{launch.flight_number}</TableCell>
                    <TableCell align="right">
                      <img src={launch.links.patch.small} width={50} />
                    </TableCell>
                    <TableCell align="right">
                      {launch.cores[0]?.reused
                        ? "Used " + launch.name
                        : launch.name}
                    </TableCell>
                    <TableCell align="right">
                      {moment(new Date(launch.date_utc)).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell align="right">
                      {rockets.find((x) => x.id === launch.rocket)?.name}
                    </TableCell>
                    <TableCell align="right">
                      {launch.success ? (
                        <Chip label="SUCESSO" color="success" />
                      ) : (
                        <Chip label="FALHA" color="error" />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <a
                        href={
                          "https://www.youtube.com/watch?v=" +
                          launch.links.youtube_id
                        }
                      >
                        <YoutubeIcon />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ReactPaginate
          nextLabel={<NextIcon />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={<PreviousIcon />}
          pageClassName={style.page_item}
          pageLinkClassName={style.page_link}
          previousClassName={style.page_item}
          previousLinkClassName={style.page_link}
          nextClassName={style.page_item}
          nextLinkClassName={style.page_link}
          breakLabel="..."
          breakClassName={style.page_item}
          breakLinkClassName={style.page_link}
          containerClassName={style.pagination}
          activeClassName={style.active}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default App;
