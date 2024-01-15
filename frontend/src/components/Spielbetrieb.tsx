import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Card from 'react-bootstrap/Card';
import {  Container } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';

interface Entry {
  id: number;
  title: string;
  team: string;
  date: Date;
  report: string; // Adjusted field name
  author: string;
  // Add other fields as needed
}

const Spielbetrieb: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const entriesPerPage: number = 5;

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response: AxiosResponse<Entry[]> = await axios.get('http://127.0.0.1:5000/latest');
        const allEntries: Entry[] = response.data;
        setEntries(allEntries);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);

  const indexOfLastEntry: number = currentPage * entriesPerPage;
  const indexOfFirstEntry: number = indexOfLastEntry - entriesPerPage;
  const currentEntries: Entry[] = entries.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      {currentEntries.map((entry) => (
        <Card key={entry.id} style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>{entry.title}</Card.Title>
            <Card.Text>{entry.team}</Card.Text>
            <Card.Text>{entry.report}</Card.Text>
            <Card.Text>{entry.author}</Card.Text>
            <Card.Text>{new Date(entry.date).toLocaleDateString()}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Pagination>
        {Array.from({ length: Math.ceil(entries.length / entriesPerPage) }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Spielbetrieb;