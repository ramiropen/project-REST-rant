# Project REST-Rant

REST-Rant is an app where users can review restaurants.

As a trucker I need to move material such as :asphalt, type 2(dirt), cold mix (dried asphalt), rocks and boulders; to be able to do my job. 


| Method|   Path   |         Purpose       |
| :---  |  :----:  |    ---------------:   |
|  Get  |    /     |                Home page |             
|  Get  | /places  |                Places index page | 
|  Post | /places  |                Create new place |       
|  Get  | /places/new |             Form page for creating new place |      
|  Get  | /places/:id|              Details about a particular place |        
|  Put  | /places/:id|              Update a particular place |        
|  Get  | /places/:id/edit|         Form page for editing an existing place |         
| Delete| /places/:id|              Delete a particular place |
|  Post | /places/:id/rant|         Create a rant (comment) about a particular place |
| Delete| /places/:id/rant/:rantld| Delete a rant (comment) about a particular place |
|  Get  |     *    |                404 page (matches any route not defined above) |