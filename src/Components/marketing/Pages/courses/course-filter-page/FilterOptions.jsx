import React, { useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap'; 
import axios from 'axios';
import { showToast } from "../../../../../Components/Showtoast";

const FilterOptions = ({ onFilterChange }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const levels = ['beginner', 'intermediate', 'advanced']; 
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch categories from the endpoint
        axios.get('https://remsana-backend-testing.azurewebsites.net/api/v1/categories')
            .then(response => {
                const { categories } = response.data;
                setCategories(categories);
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const requestData = {
                category: selectedCategories,
                level: selectedLevels.map(level => level.toLowerCase()), // Ensure all levels are lowercase
            };

            // Post the filter options to the endpoint
            const response = await axios.post(
                'https://remsana-backend-testing.azurewebsites.net/api/v1/search-courses',
                requestData
            );

            // Handle response data here if needed
            console.log(response.data);

            // Pass selected categories and levels to parent component
            onFilterChange({ selectedCategories, selectedLevels });

            showToast('Filter applied successfully');
        } catch (error) {
            console.error('Error applying filter:', error);
            showToast(error.response?.data?.msg || 'An error occurred while applying filter.');
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategories(prev => [...prev, value]);
        } else {
            setSelectedCategories(prev => prev.filter(cat => cat !== value));
        }
    };
    
    const handleLevelChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedLevels(prev => [...prev, value]);
        } else {
            setSelectedLevels(prev => prev.filter(level => level !== value));
        }
    };
    // Helper function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <Card>
            {/* Card header */}
            <Card.Header>
                <h4 className="mb-0">Filter</h4>
                <h6>Pls select to see available course</h6>
            </Card.Header>
            {/* Card body */}
            <Card.Body>
                <span className="dropdown-header px-0 mb-2"> Category</span>
                <h6>Pls select one or more </h6>
                <Form>
                    {/* Checkboxes for Categories */}
                    {categories.map((category, index) => (
                        <Form.Check
                            type="checkbox"
                            className="mb-1"
                            label={category}
                            value={category}
                            onChange={handleCategoryChange}
                            key={index}
                        />
                    ))}
                </Form>
            </Card.Body>
            {/* Card body */}
            <Card.Body className="border-top">
                <span className="dropdown-header px-0 mb-2"> Skill Level</span>
                <h6>Pls select one or more </h6>
                
                <Form>
                    {/* Checkboxes for Levels */}
                    {levels.map((level, index) => (
                        <Form.Check
                            type="checkbox"
                            className="mb-1"
                            label={capitalizeFirstLetter(level)}
                            value={level}
                            onChange={handleLevelChange}
                            key={index}
                        />
                    ))}
                </Form>
            </Card.Body>
            {/* Search input */}
            <Card.Footer>
                <Button variant="primary" onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Applying Filter...' : 'Apply Filter'}
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default FilterOptions;
