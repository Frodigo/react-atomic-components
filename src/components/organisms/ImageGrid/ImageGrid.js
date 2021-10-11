import React from 'react';

import classes from './ImageGrid.module.css';

export const ImageGrid = (props) => {
    const { gridCols } = props;

    const shouldDisplayGridCols = gridCols.map((col) => {
        const shouldDisplayImages = col.images.map((item) => {
            const { image } = item;

            return (
                <img
                    className={classes.image}
                    src={image.filename}
                    alt={image.alt}
                    width={item.imageWidth}
                    heaight={item.imageHeight}
                    key={item._uid}
                />
            );
        });

        return (
            <div className={classes.gridCol} key={col._uid}>
                {shouldDisplayImages}
            </div>
        );
    });

    return <div className={classes.imageGrid}>{shouldDisplayGridCols}</div>;
};

export default ImageGrid;
