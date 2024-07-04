import React from 'react';
import PropTypes from 'prop-types';
import ReactTagInput from '@pathofdev/react-tag-input';

const GKTagsInput = ({ defaultTags = [], onAddTag, onRemoveTag }) => {
    // Filter out undefined elements from defaultTags array
    const filteredTags = defaultTags.filter(tag => tag && typeof tag === 'string');

    return (
        <ReactTagInput
            tags={filteredTags}
            onChange={(newTags) => {
                // Identify added and removed tags
                const addedTags = newTags.filter(tag => !filteredTags.includes(tag));
                const removedTags = filteredTags.filter(tag => !newTags.includes(tag));
                
                // Handle added tags
                if (addedTags.length > 0) {
                    addedTags.forEach(tag => onAddTag(tag));
                }

                // Handle removed tags
                if (removedTags.length > 0) {
                    removedTags.forEach(tag => {
                        const indexToRemove = filteredTags.indexOf(tag);
                        onRemoveTag(indexToRemove);
                    });
                }
            }}
        />
    );
};

GKTagsInput.propTypes = {
    defaultTags: PropTypes.arrayOf(PropTypes.string),
    onAddTag: PropTypes.func.isRequired,
    onRemoveTag: PropTypes.func.isRequired
};

export default GKTagsInput;
