import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@apollo/client";
import moment from "moment";

import Spinner from "../components/Spinner";
import { FETCH_RECORDS_QUERY } from "../util/graphql";

import {
  StyledTableTitle,
  StyledTableWrapper,
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledTableRow,
  StyledTableElement,
  StyledTableRank,
} from "./styles/StyledLeaderBoard";

const allUsersEndpoint = "http://localhost:5000/users/all";

const LeaderBoard = () => {
  // const { loading, data } = useQuery(FETCH_RECORDS_QUERY);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await axios.get(allUsersEndpoint);
      setData(data.users);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <StyledTableWrapper>
      <StyledTableTitle>Leaderboard</StyledTableTitle>
      <StyledTable>
        <StyledTableHeader>
          <StyledTableRow>
            <StyledTableRank>Rank</StyledTableRank>
            <StyledTableElement>Player</StyledTableElement>
            <StyledTableElement>Score</StyledTableElement>
            <StyledTableElement>Achieved</StyledTableElement>
          </StyledTableRow>
        </StyledTableHeader>
        <StyledTableBody>
          {data.length > 0 &&
            data.map((record, idx) => (
              <StyledTableRow key={record.id}>
                <StyledTableRank style={{ color: "#C4421A" }}>
                  {idx + 1}
                </StyledTableRank>
                <StyledTableElement>{record.email}</StyledTableElement>
                <StyledTableElement>{record.points}</StyledTableElement>
                <StyledTableElement>
                  {moment(record.createdAt).fromNow(true)} ago
                </StyledTableElement>
              </StyledTableRow>
            ))}
        </StyledTableBody>
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default LeaderBoard;
