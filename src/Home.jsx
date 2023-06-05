
import React, { useState } from "react";
//import { Card, CardHeader, Text, Icon } from "@ui5/webcomponents-react";
import {
  Avatar,
  Card,
  CardHeader,
  Text,
  ShellBar,
  ShellBarItem,
  List,
  StandardListItem,
  CustomListItem,
  ValueState,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon,
  TableColumn,
  ComboBox,
  ComboBoxItem,
  Input
} from "@ui5/webcomponents-react";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";


//import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
//import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";
import { sapUiContentPadding } from "@ui5/webcomponents-react-base/dist/styling/spacing";
import { useNavigate } from "react-router-dom";
const dataset = [
  {
    month: "January",
    project:"Data gathering",
    data: 65,
    data2:56,
  },
  {
    month: "February",
    project:"Data gathering",
    data: 59,
    data2:95,
  },
  {
    month: "March",
    project:"Data integration",
    data: 80,
    data2:70,
  },
  {
    month: "April",
    project:"Data integration",
    data: 81,
    data2:18,
  },
  {
    month: "May",
    project:"Data Analysis",
    data: 56,
    data2:56,
  },
  {
    month: "June",
    project:"Data Analysis",
    data: 55,
    data2:82,
  },
  {
    month: "July",
    project:"Data Analysis",
    data: 40,
    data2:38,
  },
];
const tableData = new Array(50).fill(null).map((_, index) => {
  return {
    name: `name${index}`,
    age: Math.floor(Math.random() * 100),
    employee: {
      Id: `${index+1}`,
      exp: Math.floor(Math.random() * 10),
    }
  };
});

const tableColumns = [
  {
    Header: "Name",
    accessor: "name" // String-based value accessors!
  },
  {
    Header: "Age",
    accessor: "age"
  },
  {
    Header: "employee Id",
    accessor: "employee.Id"
  },
  {
    Header: "employee experience",
    accessor: "employee.exp"
  }
];

export function Home() {
 
  /*const [name,setname]=useState("Taylor");
  const [Age,setAge]=useState(20);
  function handleChange(e){
    setname(e.target.value);
  }
  function handleClick(){
    setAge(Age+1);
  }
  return(
    <>
   <input
   value={name}
   onChange={handleChange}

   />

   <button
    onClick={handleClick}
    
    >
    Age incrementer
   </button>
   <p>
    Hello my name is {name}!
    My age is {Age}
   </p>
    </>
  );
  */
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading,setloading]=useState("false");
  const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'Bar Chart';
  const switchToChart = toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';
  
  const handleHeaderClick = () => {
    if (toggleCharts === "lineChart") {
        setloading("true");
        setTimeout(()=>{
          setloading("true");
          setToggleCharts("barChart");
        },2000)          
        }
      
     
    else {
      setloading("true");
      setTimeout(()=>{
        setloading("false");
        setToggleCharts("lineChart");
      },2000)
      
    }
  
  };
  const navigate = useNavigate();
const handleProgressHeaderClick = () => {
  navigate("/detail");
};
  return (
    <div>
    
      <FlexBox
      justifyContent={FlexBoxJustifyContent.Start}>
      <babel 
        style={spacing.sapUiContentPadding}
        > 
          Location
        </babel>
        <ComboBox 
onChange={function ka(){}}
onSelectionChange={function ka(){}}
onInput={function ka (){}}>
  <ComboBoxItem text="Bangalore"/>
  <ComboBoxItem text="Gurugram"/>
  <ComboBoxItem text="Pune"/>
  <ComboBoxItem text="Mumbai"/>
  <ComboBoxItem text="Hyderabad"/>
  
</ComboBox>
      </FlexBox>
     <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
      style={spacing.sapUiContentPadding}
      wrap={FlexBoxWrap.Wrap}
      >
       
     <Card
        header={
          <CardHeader
            titleText="Stock Price"
            subtitleText={`Click here to shift to ${switchToChart}`}
            interactive
            onClick={handleHeaderClick}
            avatar={
              <Icon
                name={
                  toggleCharts === "lineChart" ? lineChartIcon : barChartIcon
                }
              />
            }
           
          />
        }
        style={{ width: "300px",...spacing.sapUiContentPadding }}
      >
        <Text style={spacing.sapUiContentPadding}>
          This is the content area of the Card
        </Text>
        {toggleCharts === "lineChart" ? (
          <LineChart
            dimensions={[{ accessor: "month" },
                      ]}
            measures={[{ accessor: "data", label: "Stock Price" }]}
            dataset={dataset}
            loading={loading}
          />
        ) : (
          <BarChart
            dimensions={[{ accessor: "month" },
                           {accessor:"project"},]}
            measures={[{ accessor: "data", label: "Stock Price" , color:"red"},
                        {accessor:"data2", label:"Estimated Price", color:"blue"},
                      ]}
            dataset={dataset}
            loading={loading}
          />
        )}
      </Card>
     
     
      <Card

        header={
          <CardHeader 
          titleText="Progess"
          subtitleText="List"
         avatar={<Icon name={listIcon}
         interactive
         onClick={handleProgressHeaderClick}
         />}
          >
          </CardHeader>
        }
        style={{width:"300px",...spacing.sapUiContentPadding}}
        >
        
          <List>
            <StandardListItem additionalText="finished" additionalTextState={ValueState.Success}>
              
              Activity 1
            </StandardListItem>
            <StandardListItem additionalText="failed" additionalTextState={ValueState.Error}>
              Activity 2
            </StandardListItem>
            <CustomListItem>
              <FlexBox 
              direction={FlexBoxDirection.Column}
             style={{width :"100%",...sapUiContentPadding}}
             >
                <FlexBox justifyContent ={FlexBoxJustifyContent.SpaceBetween}>
                <Text style={{fontSize:ThemingParameters.sapFontLargeSize}}> 
                  Activity 3
                  </Text>
              <Text style={{color:ThemingParameters.sapCriticalTextColor}}> 
                in progress
                </Text>
                </FlexBox>
              
              <ProgressIndicator 
              value={90} 
              valueState={ValueState.Success}
              style={{...spacing.sapUiTinyMarginTop}}
              />
              </FlexBox>
              
            </CustomListItem>
            <CustomListItem>
              <FlexBox 
              direction={FlexBoxDirection.Column}
              style={{width:"100%",...spacing.sapUiContentPadding}}
              >
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <Text style={{fontSize:ThemingParameters.sapFontLargeSize}}>
                Activity 4
              </Text>
              <Text style={{color:ThemingParameters.sapCriticalElementColor}}>
                in progress
              </Text>
              </FlexBox>
              <ProgressIndicator
                value={34}
                valueState={ValueState.Error}
                style={{...spacing.sapUiTinyMarginTop}}
             />
              </FlexBox>
             
            </CustomListItem>
          </List>
      </Card>
      
      
      <Card header={<CardHeader 
      titleText="Analytic Table"
    avatar={<Icon name={tableViewIcon}/>}
    />}
    style={{maxWidth:"900px",...sapUiContentPadding}}
    >
      
      
     <AnalyticalTable
    data={tableData}
    columns={tableColumns}
    visibleRows={10}// default visible rows are 15.
     />
     
      </Card>
      </FlexBox> 
      
    </div>
  );
}

