import * as React from 'react';

import { Box, FormHelperText, FormLabel, Tooltip } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import InfoIcon from '@mui/icons-material/Info';

import { settingsCol1Width } from '~/common/app.theme';


/**
 * Shared label part (left side)
 */
export const FormLabelStart = (props: {
  title: string | React.JSX.Element,
  description?: string | React.JSX.Element
  tooltip?: string | React.JSX.Element,
  onClick?: (event: React.MouseEvent) => void,
  sx?: SxProps,
}) => React.useMemo(() =>
    <Box>
      {/* Title */}
      <FormLabel
        onClick={props.onClick}
        sx={{
          width: settingsCol1Width,
          ...(!!props.onClick && { cursor: 'pointer', textDecoration: 'underline' }),
          ...props.sx,
        }}
      >
        {props.title} {props.tooltip && (
        <Tooltip title={props.tooltip} sx={{ maxWidth: { sm: '50vw', md: '25vw' } }}>
          <InfoIcon sx={{ mx: 0.5, cursor: 'pointer', fontSize: 'md', color: 'primary.solidBg' }} />
        </Tooltip>
      )}
      </FormLabel>

      {/* [SubTitle] */}
      {!!props.description && (
        <FormHelperText
          sx={{
            display: 'block',
          }}
        >
          {props.description}
        </FormHelperText>
      )}
    </Box>
  , [props.onClick, props.sx, props.title, props.tooltip, props.description],
);