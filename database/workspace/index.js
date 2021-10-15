const { Workspace } = require('./models.js');

// create and save a new workspace //
const createAndSaveWorkspace = (workspaceDetails) => {
  let workspace = new Workspace({
    name: workspaceDetails.name,
    description: workspaceDetails.description,
    color: workspaceDetails.color,
    category: workspaceDetails.category
  });
  workspace.save(function(err, data) {
    if (err) return err;
    return data;
  })
};

module.exports = function(app){
  app.post('/api/workspace/createNewWorkspace', async (req, res) => {
    let createWorkspace = createAndSaveWorkspace(req.body.workspace);
    res.send(createWorkspace);
    return createWorkspace;
  });
}