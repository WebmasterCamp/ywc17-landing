<script>
import styled from 'vue-styled-components'
import color, { colorScheme } from '~/utils/color'
export default styled('div', { name: String })`
  .themeText {
    color: ${props => props.name ? colorScheme[props.name].normal : color.main};
    font-weight: bold;
  }
  .themeLink, .questions a {
    text-decoration: underline;
    color: ${props => props.name ? colorScheme[props.name].normal : color.main};
    &:visited, &:active, &:hover {
       color: ${props => props.name ? colorScheme[props.name].normal : color.main};
    }
  }
  .themeButton {
    background-color: ${props => props.name ? colorScheme[props.name].normal : color.main};
  }
  .webDesign {
    color: ${colorScheme.yellow.normal};
  }

  // ======== START Ant Design Override ========
  // Highlighter
  mark {
    padding: 0.2em;
    background-color: #feffe6;
  }
  .ant-table { 
    font-size: 18px;
    @media screen and (max-width:768px) {
      font-size: 14px;
    }
  }
  // Table Head
  .ant-table-thead > tr > th {
    color: ${props => props.name ? colorScheme[props.name].normal : color.main};
    border-bottom: 1px solid ${props => props.name ? colorScheme[props.name].light : colorScheme.pink.light};
    background: none;
    font-weight: bold;
  }
  .agendaTable {
    .ant-table-thead tr:first-of-type th {
      background: ${props => props.name ? colorScheme[props.name].normal : color.main};
      color: white;
    }
  }
  // Table Row Hover Color
  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: ${props => props.name ? colorScheme[props.name].light : colorScheme.pink.light};
  }
  // Table Sorter - Inactive Color 
  .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-up:not(.on), .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:active .ant-table-column-sorter-down:not(.on),
  .ant-table-thead > tr > th .ant-table-column-sorter {
    color: ${props => props.name ? colorScheme[props.name].light : colorScheme.pink.light};
  }
  // Table Sorter - Active Color
  .ant-table-thead > tr > th .ant-table-column-sorter-up.on, .ant-table-thead > tr > th .ant-table-column-sorter-down.on {
    color: ${props => props.name ? colorScheme[props.name].normal : colorScheme.pink.normal};
  }
  .ant-table-tbody > tr > td.ant-table-column-sort {
    background: transparent;
  }
  .ant-table-thead > tr > th.ant-table-column-sort {
    background: transparent;
  }
  .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover {
    background: ${props => props.name ? colorScheme[props.name].light : colorScheme.pink.light};
  }
  // Table Filter Active Color 
  .ant-table-thead > tr > th .ant-table-filter-selected.anticon-filter {
    color: ${props => props.name ? colorScheme[props.name].normal : colorScheme.pink.normal};
  }
  .ant-table-filter-dropdown-link {
    color: ${props => props.name ? colorScheme[props.name].normal : colorScheme.pink.normal};
  }
  // Input
  .ant-input:hover, .ant-input:focus {
    border-color: ${props => props.name ? colorScheme[props.name].normal : colorScheme.pink.normal};
  }
  .ant-input:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }
  .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
    border-color: ${props => props.name ? colorScheme[props.name].normal : colorScheme.pink.normal};
  }
  // Spinner
  .ant-spin-dot i {
    background-color: ${props => props.name ? colorScheme[props.name].normal : colorScheme.pink.normal};
  }
  // Button 
  .ant-btn-primary:hover, .ant-btn-primary:focus {
    color: black;
    background-color: ${props => props.name ? colorScheme[props.name].light : colorScheme.pink.light};
    border-color: ${props => props.name ? colorScheme[props.name].light : colorScheme.pink.light};
  }
  .ant-btn-primary, .ant-btn-primary:active, .ant-btn-primary.active {
    background-color: ${props => props.name ? colorScheme[props.name].normal : colorScheme.pink.normal};
    border-color: ${props => props.name ? colorScheme[props.name].normal : colorScheme.pink.normal};
  }
`
</script>
